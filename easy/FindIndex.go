package main

import "fmt"

var (
	haystack string
	needle   string
	result   int16
	i        int16
	j        int16
)

func main() {
	haystack = "leetcode"
	needle = "leeto"
	fmt.Print(strStr(needle, haystack))
}

func strStr(haystack string, needle string) int16 {
	i = 0
	j = 0

	for i < j {
		if haystack[i] == needle[j] {
			i++
			j++
		} else {
			i = i - j + 1
			j = 0
		}
	}

	result = 0
	return result
}
