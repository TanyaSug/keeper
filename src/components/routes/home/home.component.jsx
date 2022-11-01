import Directory from "../../directory/directory.component";

const Home = () => {

    const categories = [
        {
            id: 1,
            title:'Documents',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKochiFvr8UT3nbJvz6kytytyZIstbcs7RjQ&usqp=CAU',

        },
        {
            id: 2,
            title:'Medicines',
            imageUrl: 'https://images.newscientist.com/wp-content/uploads/2019/06/18153152/medicineshutterstock_1421041688.jpg',
        },
        {
            id: 3,
            title:'Cosmetics',
            imageUrl: 'https://rukminim1.flixcart.com/image/416/416/kq5iykw0/makeup-kit/3/k/u/beauty-new-99-beauty-cosmetics-original-imag486zybawksgb.jpeg?q=70',
        },
        {
            id: 4,
            title:'Clothes',
            imageUrl: 'https://media.istockphoto.com/photos/display-of-elegant-silk-clothes-on-rack-luxurious-garments-in-fashion-picture-id1393893314?b=1&k=20&m=1393893314&s=170667a&w=0&h=ziWanOx35kPkFNcDSVJj3wUkJSXnRk3IgFZQ-lxwr4o=',
        },
        {
            id: 5,
            title:'Shoes',
            imageUrl: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15461146/2021/12/7/8198188f-5b43-4571-8836-fac58beef9f21638875430363-AfroJack-Men-Green--White-Woven-Design-Sneakers-641638875429-1.jpg',
        },
        {
            id: 6,
            title:'Books',
            imageUrl: 'https://www.themanual.com/wp-content/uploads/sites/9/2021/05/best-history-books-to-read-2021.jpg?p=1',
        },
        {
            id: 7,
            title:'Photos',
            imageUrl: 'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1526992650-221580-shutterstock-1044511264jpg.jpg',
        },
    ];

    return (
        <Directory categories={categories}/>
    );
};

export default Home;
