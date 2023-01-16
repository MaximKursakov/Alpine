document.addEventListener('alpine:init', () => {
    Alpine.store('data', {
        path: "./src/images/",
        wishlist: [],
        addToWishlist(item) {
            if(!this.wishlist.includes(item)) {
            this.wishlist.push(item);
        }
        },
        basketTotal: 0,
        basketDuplicates: [],
        duplicateAmount: [],
        checkForDuplicates (item) {
                if (!this.basketDuplicates.includes(item)) {
                    item[item.title] = 1
                    this.basketDuplicates.push(item)
                }
                else {
                    item[item.title]++
                }
                console.log(item)
        },
        addToBasket(item) {
            this.basketTotal++;
            this.checkForDuplicates(item);
            this.duplicateAmount.push(item)
        },
        removeFromBasket(item) {
            item[item.title]--;
            this.basketTotal--;
        },
        // es wird der basket durchgegangen. 
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