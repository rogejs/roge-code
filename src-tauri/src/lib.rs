mod commands {
    pub mod fs_actions;
}
mod internal;

use commands::fs_actions;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            fs_actions::open_folder,
            fs_actions::list_file,
            fs_actions::create_file,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
