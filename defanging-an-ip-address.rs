impl Solution {
    pub fn defang_i_paddr(address: String) -> String {
        let result = str::replace(&address, ".", "[.]");
        return result;
    }
}
