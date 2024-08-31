// const a = prompt ('write something for h2')
// const b = prompt ('write something for p')
// const c = prompt ('write a price')


// const h2 = document.querySelector ('h2')
// const p = document.querySelector ('p')
// const wrapper = document.querySelector ('.wrapper') 


// h2.innerText = a
// p.innerText = b



// const price = document.createElement('h3')
// price.innerText = c

// wrapper.append(price)



// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')


// btn1.onclick = () => {
//     alert('English or Spanish')
// }

// btn2.onclick = () => {
//     wrapper.classList.add('kj')
//     alert("English")
    
// }



const list = document.querySelector ('.list')
const f1 = prompt('fruit1')
const f2 = prompt('fruit2')
const f3 = prompt('fruit3')


const fruits = []


fruits.push(f1)
fruits.push(f2)
fruits.push(f3)





fruits.forEach(fruit => {
    const p = document.createElement('p')
    p.innerText = fruit
    list.append(p)

    p.onclick = () => {
        p.remove()
    }
    
})

