def max_end3(nums):
  if(nums[len(nums)-1] > nums[0]):
    return [nums[len(nums)-1], nums[len(nums)-1], nums[len(nums)-1]]
  else:
    return [nums[0], nums[0], nums[0]]