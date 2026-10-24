use crate::internal::fs_ops::fs_types::FileEntry;
use std::fs;

pub fn read_folder(path: &str) -> Result<Vec<FileEntry>, String> {
    let mut entries: Vec<FileEntry> = fs::read_dir(path)
        .map_err(|e| e.to_string())?
        .filter_map(|e| e.ok())
        .map(|e| {
            let p = e.path();
            let is_dir = match e.file_type() {
                Ok(ft) if ft.is_symlink() => fs::metadata(&p).map(|p| p.is_dir()).unwrap_or(false),
                Ok(ft) => ft.is_dir(),
                Err(_) => false,
            };

            FileEntry {
                name: e.file_name().to_string_lossy().into_owned(),
                path: p.to_string_lossy().into_owned(),
                is_dir,
            }
        })
        .collect();

    entries.sort_by(|a, b| {
        b.is_dir
            .cmp(&a.is_dir)
            .then_with(|| a.name.to_lowercase().cmp(&b.name.to_lowercase()))
    });

    Ok(entries)
}
