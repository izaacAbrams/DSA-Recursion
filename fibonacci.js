const fibonacci = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
    const s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
};

 console.log(fibonacci(6));
