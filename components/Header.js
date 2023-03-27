export const Title = () => {
    return (
        <img
            alt="logo"
            className='logo'
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Ffoodvillarestaurant1%2F&psig=AOvVaw0WpxoxCycsv_iaJbWv4122&ust=1679861491953000&source=images&cd=vfe&ved=2ahUKEwjZm6Lt8ff9AhUEx6ACHe3fBE4QjRx6BAgAEAo" />

    )
}

const Header = () => {
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;