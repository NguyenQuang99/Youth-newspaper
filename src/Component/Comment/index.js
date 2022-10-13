function Comment({ width, marginLeft, marginTop }) {
    return (
        <div
            class="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop"
            data-href=""
            data-width="100%"
            data-num-posts="5"
            data-colorscheme="dark"
            style={{ width: width, marginLeft: marginLeft, backgroundColor: '#fff', marginTop: marginTop }}
            fb-xfbml-state="rendered"
            fb-iframe-plugin-query="app_id=312962369745106&amp;color_scheme=dark&amp;container_width=830&amp;height=100&amp;href=https%3A%2F%2Fphimmoi88.net%2Fphim%2Ftai-chien-giang-ho&amp;locale=vi_VN&amp;sdk=joey&amp;version=v7.0&amp;width="
        >
            <span style={{ verticalAlign: 'bottom', width: '100%', height: '212px' }}>
                <iframe
                    name="f29df31ebc78fc"
                    width="1000px"
                    height="100px"
                    data-testid="fb:comments Facebook Social Plugin"
                    title="fb:comments Facebook Social Plugin"
                    frameborder="0"
                    allowtransparency="true"
                    allowfullscreen="true"
                    scrolling="no"
                    allow="encrypted-media"
                    src="https://www.facebook.com/v7.0/plugins/comments.php?app_id=312962369745106&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df14d1209333b248%26domain%3Dphimmoi88.net%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fphimmoi88.net%252Ff1912e917e4129%26relation%3Dparent.parent&amp;color_scheme=dark&amp;container_width=830&amp;height=100&amp;href=https%3A%2F%2Fphimmoi88.net%2Fphim%2Ftai-chien-giang-ho&amp;locale=vi_VN&amp;sdk=joey&amp;version=v7.0&amp;width="
                    style={{ border: 'none', visibility: 'visible', width: '100%', height: '212px' }}
                    class=""
                ></iframe>
            </span>
        </div>
    );
}

export default Comment;
