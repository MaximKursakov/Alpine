document.addEventListener('alpine:init', () => {
    Alpine.store('data', {
        path: "./src/images/",
        wishlist: [],
        addToWishlist(item) {
            if(!this.wishlist.includes(item)) {
            this.wishlist.push(item);
        }
        },
        basket: [],
        addToBasket(item) {
            this.basket.push(item);
        },
        removeFromBasket(item) {
            for(let i = 0; i <= this.basket.length; i++) {
                console.log(item.title === this.basket[i].title)
                if (item.title === this.basket[i].title) {
                    this.basket.splice(i, 1);
                    break;
                }
            }
        },
        products: [{
            title: "Vitamin B Creme",
            img: `Product1.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 30.99,
        },
        {
            title: "Creme Paradaoxe",
            img: `Product2.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 60.99,
        },
        {
            title: "Line Combat Fluid",
            img: `Product3.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 35.99,
        },
        {
            title: "Gel exfoliant du corps",
            img: `Product4.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 45.99,
        },
        {
            title: "Enriched Moisturizing Body Lotion",
            img: `Product5.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 60.99,
        },]
    })
})