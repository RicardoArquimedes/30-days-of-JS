export function findFamousCats(cats) {
    let obj = {};
  
    cats.forEach(element => {
      return obj[element.name] = element.followers.reduce((a, b) => a + b)
    });
  
    let max = Math.max(...Object.values(obj));
    return (Object.keys(obj).filter(key => obj[key] === max));
  };
  