document.addEventListener('alpine:init', () => {
    Alpine.store('data', {
        path: "./src/images/",
        wishlist: [],
        addToWishlist(item) {
            if(!this.wishlist.includes(item)) {
            this.wishlist.push(item);
        }
        },
        pricePerUnit(item) {
            return ((item.price / item.unit) * 100).toFixed(2)
        },
        basketTotal: 0,
        basketDuplicates: [],
        duplicateAmount: [],
        totalPrice : 0,
        checkForDuplicates (item) {
                if (!this.basketDuplicates.includes(item)) {
                    item[item.title] = 1
                    this.basketDuplicates.push(item)
                }
                else {
                    item[item.title]++
                }
        },
        addToBasket(item) {
            this.basketTotal++;
            this.checkForDuplicates(item);
            this.duplicateAmount.push(item)
            this.totalPrice += item.price
        },
        removeBundle(item) {
            while(item[item.title] !== 0) {
                item[item.title]--
                this.basketTotal--;
                this.totalPrice -= item.price
            }
        },
        removeFromBasket(item) {
            if(item[item.title] > 0) {
                item[item.title]--;
            this.basketTotal--;
            this.totalPrice -= item.price
            }
        },
        getTotalPrice() {  
        },
        products: [{
            title: "Vitamin B Creme",
            img: `Product1.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 14.95,
            unit: 200,
        },
        {
            title: "Creme Paradaoxe",
            img: `Product2.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 60.99,
            unit: 300,
        },
        {
            title: "Line Combat Fluid",
            img: `Product3.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 35.99,
            unit: 200,
        },
        {
            title: "Gel exfoliant du corps",
            img: `Product4.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 45.99,
            unit: 400,
        },
        {
            title: "Enriched Moisturizing Body Lotion",
            img: `Product5.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 60.99,
            unit: 200,
        },
        {
            title: "Vitamin B Creme",
            img: `Product1.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 14.95,
            unit: 200,
        },
        {
            title: "Creme Paradaoxe",
            img: `Product2.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 60.99,
            unit: 300,
        },
        {
            title: "Line Combat Fluid",
            img: `Product3.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 35.99,
            unit: 200,
        },
        {
            title: "Gel exfoliant du corps",
            img: `Product4.png`,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolores dicta laboriosam tempora! Quam ducimus quaerat veritatis vitae, eius asperiores pariatur a quidem quibusdam odit molestiae nostrum repudiandae quasi ea!",
            price: 45.99,
            unit: 400,
        },]
    })
})