let productos = [
    {
        nombre: 'Bermuda cargo',
        precio: 6500,
        id: 1,
        img: '../img/imgprod/bermudaCarg.png'
    },
    {
        nombre: 'Bermuda cargo gris',
        precio: 6200,
        id: 2,
        img: '../img/imgprod/bermudaCargGris.png'
    },
    {
        nombre: 'Bermuda cargo veige',
        precio: 5999,
        id: 3,
        img: '../img/imgprod/bermudaCargVg.png'
    },
    {
        nombre: 'Pantalon cargo veige',
        precio: 6800,
        id: 4,
        img: '../img/imgprod/pantalonCargV.png'
    },
    {
        nombre: 'Remera drew ',
        precio: 2100,
        id: 5,
        img: '../img/imgprod/remeraBlanc.png'
    },
    {
        nombre: 'Remera blanca men',
        precio: 2400,
        id: 6,
        img: '../img/imgprod/remeraBlanMen.png'
    },
    {
        nombre: 'Remera gris',
        precio: 2100,
        id: 7,
        img: '../img/imgprod/remeraGris.png'
    },
    {
        nombre: 'Jean',
        precio: 4050,
        id: 8,
        img: '../img/imgprod/pantalonJean.png'
    },
    {
        nombre: 'Jean gris',
        precio: 3900,
        id: 9,
        img: '../img/imgprod/pantalonJeanG.png'
    },
    {
        nombre: 'Pantalon Cargo',
        precio: 4500,
        id: 10,
        img: '../img/imgprod/pantalonCarg.png'
    },
    {
        nombre: 'Campera rompe vientos blanca',
        precio: 5500,
        id: 11,
        img: '../img/imgprod/rompeVientosBlc.png'
    },
    {
        nombre: 'Campera rompe vientos negra',
        precio: 4900,
        id: 12,
        img: '../img/imgprod/rompeVientosNeg.png'
    },
]


async function talles() {
    const {} = await Swal.fire({
        title: 'Lista de talles',
        input: 'select',
        inputOptions: {
            'Remeras': {
            s: 'Talle S',
            m: 'Talle M',
            xm: 'Talle XM',
            xl: 'Talle XL'
            },
            'pantalones': {
            s: 'Talle S',
            m: 'Talle M',
            xm: 'Talle XM'
            },
            'camperas': {
            s: 'Talle S',
            m: 'Talle M',
            xm: 'Talle XM',
            xl: 'Talle XL'
            },
            'bermudas': {
            s: 'Talle S',
            xm: 'Talle XM',
            xl: 'Talle XL'
            },
        },
        inputPlaceholder: 'Talles en Stock',
        showCancelButton: true,
    })
}