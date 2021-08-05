class Solution:
    def busyStudent(self, startTime: List[int], endTime: List[int], queryTime: int) -> int:
        def l(times: List[List[int]]) -> bool:
            startTime, endTime = times
            return True if queryTime >= startTime and queryTime <= endTime else False

        return len(list(filter(l, [[startTime[i], endTime[i]] for i in range(len(startTime))])))
