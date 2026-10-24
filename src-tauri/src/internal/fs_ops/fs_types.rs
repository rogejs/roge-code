use core::str;

use serde::Serialize;

#[derive(Serialize)]
pub struct FileEntry {
    pub name: String,
    pub path: String,
    pub is_dir: bool,
}

#[derive(Serialize)]
pub struct Entries {
    pub root: String,
    pub entries: Vec<FileEntry>,
}

#[derive(Serialize)]
pub struct ListDir {
    path: String,
    list_dir: Vec<FileEntry>,
}

#[derive(Serialize)]
pub struct Created {
    path: String,
    list: Vec<ListDir>,
}
