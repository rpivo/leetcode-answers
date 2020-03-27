class Solution {
    fun removeVowels(S: String): String {
        val new = S.replace(Regex("[aeiou]"), "")
        return new
    }
}