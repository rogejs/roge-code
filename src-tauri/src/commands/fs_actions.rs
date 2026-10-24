use tauri::AppHandle;
use tauri_plugin_dialog::DialogExt;

use crate::internal::fs_ops::{
    // create::create_entry,
    fs_types::{Entries, FileEntry},
    read::read_folder,
};

#[tauri::command]
pub fn open_folder(app: AppHandle) -> Result<Option<Entries>, String> {
    let Some(picked) = app.dialog().file().blocking_pick_folder() else {
        return Ok(None);
    };

    let root = picked
        .into_path()
        .map_err(|e| e.to_string())?
        .to_string_lossy()
        .into_owned();
    let entries = read_folder(&root)?;

    Ok(Some(Entries { root, entries }))
}

#[tauri::command]
pub fn list_file(path: String) -> Result<Vec<FileEntry>, String> {
    read_folder(&path)
}

#[tauri::command]
pub fn create_file(parent: String, name: String) {
    // create_entry(&parent, &name, false);
}
