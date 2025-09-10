import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { RiCloseFill } from 'react-icons/ri'

interface Props {
    show: boolean,
    setShow: (arg0: boolean) => void
}

const list = [
    {
        "id": 26,
        "title": "Green Chili Pepper",
        "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
        "category": "groceries",
        "price": 0.99,
        "discountPercentage": 1,
        "rating": 3.66,
        "stock": 3,
        "tags": [
            "vegetables"
        ],
        "sku": "GRO-BRD-GRE-026",
        "weight": 7,
        "dimensions": {
            "width": 15.38,
            "height": 18.12,
            "depth": 19.92
        },
        "warrantyInformation": "2 year warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "Low Stock",
        "reviews": [
            {
                "rating": 4,
                "comment": "Great product!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Luna Russell",
                "reviewerEmail": "luna.russell@x.dummyjson.com"
            },
            {
                "rating": 1,
                "comment": "Waste of money!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Noah Lewis",
                "reviewerEmail": "noah.lewis@x.dummyjson.com"
            },
            {
                "rating": 3,
                "comment": "Very disappointed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Clara Berry",
                "reviewerEmail": "clara.berry@x.dummyjson.com"
            }
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 39,
        "meta": {
            "createdAt": "2025-04-30T09:41:02.053Z",
            "updatedAt": "2025-04-30T09:41:02.053Z",
            "barcode": "9335000538563",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
        "quantity": 1
    },
    {
        "id": 26,
        "title": "Green Chili Pepper",
        "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
        "category": "groceries",
        "price": 0.99,
        "discountPercentage": 1,
        "rating": 3.66,
        "stock": 3,
        "tags": [
            "vegetables"
        ],
        "sku": "GRO-BRD-GRE-026",
        "weight": 7,
        "dimensions": {
            "width": 15.38,
            "height": 18.12,
            "depth": 19.92
        },
        "warrantyInformation": "2 year warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "Low Stock",
        "reviews": [
            {
                "rating": 4,
                "comment": "Great product!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Luna Russell",
                "reviewerEmail": "luna.russell@x.dummyjson.com"
            },
            {
                "rating": 1,
                "comment": "Waste of money!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Noah Lewis",
                "reviewerEmail": "noah.lewis@x.dummyjson.com"
            },
            {
                "rating": 3,
                "comment": "Very disappointed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Clara Berry",
                "reviewerEmail": "clara.berry@x.dummyjson.com"
            }
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 39,
        "meta": {
            "createdAt": "2025-04-30T09:41:02.053Z",
            "updatedAt": "2025-04-30T09:41:02.053Z",
            "barcode": "9335000538563",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
        "quantity": 1
    },
    {
        "id": 26,
        "title": "Green Chili Pepper",
        "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
        "category": "groceries",
        "price": 0.99,
        "discountPercentage": 1,
        "rating": 3.66,
        "stock": 3,
        "tags": [
            "vegetables"
        ],
        "sku": "GRO-BRD-GRE-026",
        "weight": 7,
        "dimensions": {
            "width": 15.38,
            "height": 18.12,
            "depth": 19.92
        },
        "warrantyInformation": "2 year warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "Low Stock",
        "reviews": [
            {
                "rating": 4,
                "comment": "Great product!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Luna Russell",
                "reviewerEmail": "luna.russell@x.dummyjson.com"
            },
            {
                "rating": 1,
                "comment": "Waste of money!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Noah Lewis",
                "reviewerEmail": "noah.lewis@x.dummyjson.com"
            },
            {
                "rating": 3,
                "comment": "Very disappointed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Clara Berry",
                "reviewerEmail": "clara.berry@x.dummyjson.com"
            }
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 39,
        "meta": {
            "createdAt": "2025-04-30T09:41:02.053Z",
            "updatedAt": "2025-04-30T09:41:02.053Z",
            "barcode": "9335000538563",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
        "quantity": 1
    },
    {
        "id": 26,
        "title": "Green Chili Pepper",
        "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
        "category": "groceries",
        "price": 0.99,
        "discountPercentage": 1,
        "rating": 3.66,
        "stock": 3,
        "tags": [
            "vegetables"
        ],
        "sku": "GRO-BRD-GRE-026",
        "weight": 7,
        "dimensions": {
            "width": 15.38,
            "height": 18.12,
            "depth": 19.92
        },
        "warrantyInformation": "2 year warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "Low Stock",
        "reviews": [
            {
                "rating": 4,
                "comment": "Great product!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Luna Russell",
                "reviewerEmail": "luna.russell@x.dummyjson.com"
            },
            {
                "rating": 1,
                "comment": "Waste of money!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Noah Lewis",
                "reviewerEmail": "noah.lewis@x.dummyjson.com"
            },
            {
                "rating": 3,
                "comment": "Very disappointed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Clara Berry",
                "reviewerEmail": "clara.berry@x.dummyjson.com"
            }
        ],
        "returnPolicy": "30 days return policy",
        "minimumOrderQuantity": 39,
        "meta": {
            "createdAt": "2025-04-30T09:41:02.053Z",
            "updatedAt": "2025-04-30T09:41:02.053Z",
            "barcode": "9335000538563",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
        "quantity": 1
    },
    {
        "id": 27,
        "title": "Honey Jar",
        "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
        "category": "groceries",
        "price": 6.99,
        "discountPercentage": 14.4,
        "rating": 3.97,
        "stock": 34,
        "tags": [
            "condiments"
        ],
        "sku": "GRO-BRD-HON-027",
        "weight": 2,
        "dimensions": {
            "width": 9.28,
            "height": 21.72,
            "depth": 17.74
        },
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships in 1-2 business days",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 1,
                "comment": "Very disappointed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Autumn Gomez",
                "reviewerEmail": "autumn.gomez@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Highly impressed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Benjamin Wilson",
                "reviewerEmail": "benjamin.wilson@x.dummyjson.com"
            },
            {
                "rating": 2,
                "comment": "Very disappointed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Nicholas Edwards",
                "reviewerEmail": "nicholas.edwards@x.dummyjson.com"
            }
        ],
        "returnPolicy": "90 days return policy",
        "minimumOrderQuantity": 47,
        "meta": {
            "createdAt": "2025-04-30T09:41:02.053Z",
            "updatedAt": "2025-04-30T09:41:02.053Z",
            "barcode": "6354306346329",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
        "quantity": 2
    },
    {
        "id": 28,
        "title": "Ice Cream",
        "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
        "category": "groceries",
        "price": 5.49,
        "discountPercentage": 8.69,
        "rating": 3.39,
        "stock": 27,
        "tags": [
            "desserts"
        ],
        "sku": "GRO-BRD-CRE-028",
        "weight": 1,
        "dimensions": {
            "width": 14.83,
            "height": 15.07,
            "depth": 24.2
        },
        "warrantyInformation": "1 month warranty",
        "shippingInformation": "Ships in 2 weeks",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 5,
                "comment": "Very pleased!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Elijah Cruz",
                "reviewerEmail": "elijah.cruz@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Excellent quality!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Jace Smith",
                "reviewerEmail": "jace.smith@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Highly impressed!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Sadie Morales",
                "reviewerEmail": "sadie.morales@x.dummyjson.com"
            }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 42,
        "meta": {
            "createdAt": "2025-04-30T09:41:02.053Z",
            "updatedAt": "2025-04-30T09:41:02.053Z",
            "barcode": "0788954559076",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
            "https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp",
            "https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp",
            "https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
        "quantity": 1
    },
    {
        "id": 29,
        "title": "Juice",
        "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
        "category": "groceries",
        "price": 3.99,
        "discountPercentage": 12.06,
        "rating": 3.94,
        "stock": 50,
        "tags": [
            "beverages"
        ],
        "sku": "GRO-BRD-JUI-029",
        "weight": 1,
        "dimensions": {
            "width": 18.56,
            "height": 21.46,
            "depth": 28.02
        },
        "warrantyInformation": "6 months warranty",
        "shippingInformation": "Ships in 1 week",
        "availabilityStatus": "In Stock",
        "reviews": [
            {
                "rating": 5,
                "comment": "Excellent quality!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Nolan Gonzalez",
                "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
            },
            {
                "rating": 4,
                "comment": "Would buy again!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Bella Grant",
                "reviewerEmail": "bella.grant@x.dummyjson.com"
            },
            {
                "rating": 5,
                "comment": "Awesome product!",
                "date": "2025-04-30T09:41:02.053Z",
                "reviewerName": "Aria Flores",
                "reviewerEmail": "aria.flores@x.dummyjson.com"
            }
        ],
        "returnPolicy": "No return policy",
        "minimumOrderQuantity": 25,
        "meta": {
            "createdAt": "2025-04-30T09:41:02.053Z",
            "updatedAt": "2025-04-30T09:41:02.053Z",
            "barcode": "6936112580956",
            "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
        },
        "images": [
            "https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
        "quantity": 2
    }
]

const Cart:React.FC<Props> = ({show, setShow})=>{
    const [cartItems, setCartItems] = useState<typeof list>([])
    const [total, setTotal] = useState(0)

    const handleEditItem = (e:React.MouseEvent<HTMLButtonElement>)=>{
    }
    
    const handleRemoveItem = (e:React.MouseEvent<HTMLButtonElement>, id:number)=>{
        setCartItems(prev=> prev.filter(item=>item.id!=id))
    }

    useEffect(()=>{
        let total = 0        
        list.map(item=> total+= item.price * item.quantity)
        setCartItems(list)
        setTotal(total)
    },[])

    return (
        <div className={`fixed flex flex-col ${!show&&'pointer-events-none'} top-0 h-screen bg-white text-black left-full duration-300 z-[200] p-10 w-100 ${show&& '-translate-x-full'}`}>
            <div className='flex flex-col gap-1 border-b-1 border-gray-400 pb-6 relative'>
                <h1 className='text-lg font-bold font-[Playfair]'>Cart</h1>
                <RiCloseFill onClick={()=>setShow(false)} className='text-red-700 hover:text-red-400 duration-150 cursor-pointer text-3xl absolute top-0 right-0'/>
            </div>
            <div className='flex flex-col grow overflow-y-auto relative gap-2 py-3'>
                {cartItems.map(item=>
                <div className='relative py-4 flex items-start shadow-soft text-sm select-none group border-b border-gray-200' key={item.id}>
                    <div className='absolute top-2 right-0 shadow-md z-200 -translate-1/2 rounded-full bg-white hover:bg-red-500 hover:text-white duration-150 cursor-pointer p-1'><IoClose/></div>
                    <div className='relative w-20 bg-[#F2F6F7]'>
                        <img className='w-full object-cover' src={item.thumbnail} alt="" />
                    </div>
                    <div className='px-6 grow'>
                        <p className='text-nowrap font-bold text-lg'>{item.title}</p>
                        <p className='text-lg'>{item.quantity}x ${item.price}</p>
                    </div>
                </div>
                )}
            </div>
            <div className='flex font-bold text-lg py-4 mb-4 border-y border-gray-200 justify-between gap-4'>
                <p>Subtotal:</p>
                <p className='text-[#FFB400]'>${total}</p>
            </div>
            <div className='flex mt-auto justify-between gap-4'>
                <button className='px-8 py-2 z-0 bg-[#FFB400] hover:bg-transparent hover:text-[#071c1f] border border-[#FFB400] hover:border-[#071c1f] duration-400 text-white text-lg ltr btn cursor-pointer'>View Cart</button>
                <button className='px-8 py-2 z-0 bg-[#FFB400] hover:bg-transparent border border-[#071c1f] hover:border-[#FFB400] duration-400 text-white hover:text-[#071c1f] text-lg rtl btn cursor-pointer'>Checkout</button>
            </div>
            <p className='mt-4 font-[Playfair]'>Free Shippping on All Orders Over $100!</p>
        </div>
    )
}

export default Cart