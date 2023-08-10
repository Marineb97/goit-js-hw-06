const categories = document.querySelectorAll('.item');
console.log('Number of categories: ', categories.length);

const items = document.querySelectorAll('.item');
 
[].forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} 
     Elements: ${itemsLength}`);
});
