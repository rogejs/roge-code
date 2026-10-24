pub fn check_valid_name(name: &str) -> bool {
    !name.is_empty()
        && name != "."
        && name != ".."
        && !name
            .chars()
            .any(|c| c.is_control() || "\\?:*\"<>|".contains(c))
}

pub fn split_name(name: &str) -> Result<Vec<String>, String> {
    let clean_name = name.trim().replace("\\", "/");
    let segments: Vec<String> = clean_name.split("/").map(|s| s.to_string()).collect();

    if segments.iter().all(|c| check_valid_name(&c)) {
        Ok(segments)
    } else {
        Err("invalid_name".to_string())
    }
}
