interface Projects {
    id: number,
    name: string,
    link: string,
    img: string,
    highlight: string
}

let projects: Projects[] = [
    {
        id: 1,
        name: 'Lala',
        link: 'some link',
        img: `${import.meta.env.BASE_URL}images/lala.png`,
        highlight: 'hover:bg-green-highlight/60'
    },
    {
        id: 2,
        name: 'Kikis Delivery Service Bento Box',
        link: 'https://sketchfab.com/3d-models/bento-box-fc4b6dd037584e9186b65464d40b1691',
        img: `${import.meta.env.BASE_URL}images/kikis cat.png`,
        highlight: 'hover:bg-yellow-highlight/60'
    },
    {
        id: 3,
        name: 'Glowing Mushrooms',
        link: 'https://sketchfab.com/3d-models/glowing-mushroom-0c1f302ba1664d2f87e6b362a426d059',
        img: `${import.meta.env.BASE_URL}images/mushroom.png`,
        highlight: 'hover:bg-pink-highlight/60'
    },
    {
        id: 4,
        name: 'Vending Machine',
        link: 'https://sketchfab.com/3d-models/vending-machine-6f94007cd6824ebcaa22d09e2cca49a0',
        img: `${import.meta.env.BASE_URL}images/vending machine.png`,
        highlight: 'hover:bg-violet-highlight/60'
    },


]

export default projects;