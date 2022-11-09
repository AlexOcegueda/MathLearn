import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (
        <>

            <div className='begin-banner-container'>
                    
                <div className='begin-banner-left'>
                    <h1 className='website-name'>LearnMathToday</h1>
                </div>
                    <div className='begin-banner-right'>
                    <h2 className='begin-banner-text'>Get Started Right Away Here!</h2>
                    <button className='begin-banner-btn' 
                    onClick={() => { navigate('/Grades')}}>Begin</button>
                </div>
            </div>
            <div className='content-1-home-container'>
                <h1 className='content-1-home-header'>About Us</h1>
                <p className='content-1-home-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis aliquam faucibus purus in massa tempor. Enim sed faucibus turpis in eu mi bibendum neque. Aliquet enim tortor at auctor urna nunc id cursus metus. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Pellentesque habitant morbi tristique senectus et netus et. Tincidunt augue interdum velit euismod in pellentesque. Ac orci phasellus egestas tellus rutrum. Pulvinar neque laoreet suspendisse interdum consectetur libero. Eu volutpat odio facilisis mauris sit amet. Commodo nulla facilisi nullam vehicula ipsum a arcu. Euismod lacinia at quis risus sed vulputate. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. </p>
                <p className='content-1-home-text'>Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Enim sed faucibus turpis in eu mi bibendum neque. Adipiscing diam donec adipiscing tristique. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Id volutpat lacus laoreet non. Egestas congue quisque egestas diam in arcu cursus euismod. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Commodo odio aenean sed adipiscing diam donec. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Orci ac auctor augue mauris. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus.</p>
            </div>

            <div className='content-2-home-container'>
                <h1 className='content-2-home-header'>How to Reach Us</h1>
                <p className='content-2-home-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Nulla facilisi etiam dignissim diam quis enim. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Sapien pellentesque habitant morbi tristique. Gravida dictum fusce ut placerat orci. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Egestas dui id ornare arcu odio. Orci dapibus ultrices in iaculis.</p>
                <p className='content-2-home-text'> Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Enim sed faucibus turpis in eu mi bibendum neque. Adipiscing diam donec adipiscing tristique. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Id volutpat lacus laoreet non. Egestas congue quisque egestas diam in arcu cursus euismod. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Commodo odio aenean sed adipiscing diam donec. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Orci ac auctor augue mauris. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus.</p>
                <p className='content-2-home-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Nulla facilisi etiam dignissim diam quis enim. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Sapien pellentesque habitant morbi tristique. Gravida dictum fusce ut placerat orci. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Egestas dui id ornare arcu odio. Orci dapibus ultrices in iaculis.</p>
                <p className='content-2-home-text'> Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Enim sed faucibus turpis in eu mi bibendum neque. Adipiscing diam donec adipiscing tristique. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Id volutpat lacus laoreet non. Egestas congue quisque egestas diam in arcu cursus euismod. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Commodo odio aenean sed adipiscing diam donec. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Orci ac auctor augue mauris. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus.</p>
            </div>

        </>
    )
}

export default Home;