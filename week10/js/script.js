const nums = [];
for (let i = 0; i < 10; i++) {
  nums[i] = i + 1;
}

// alert(nums);

var sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

document.write(`<p> The numbers are  is ${nums} </p>`);
document.write(`<p> The sum is ${sum} </p>`);

var total = 0;
for (j in nums) {
  total += nums[j];
}
document.write(`<p> FOR IN : The sum is ${sum} </p>`);

for (k of nums) {
  total += k;
}

document.write(`<p>FOR OF : The sum is ${sum} </p>`);
