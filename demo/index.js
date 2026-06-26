console.log('Website programmed by Lou Harrison.')
scrollToHeader()


document.getElementById('navbar-contact-cta').addEventListener('click', e => {
	window.location.hash = '#contact'
	scrollToHeader(300)
})

async function scrollToHeader(delay = 1000) {
    setTimeout(() => {
        // check for hash in url
        const scrollToId = window.location.hash.slice(1, window.location.hash.length)
        if (scrollToId) {
            document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
            console.log('Scrolled to', scrollToId);
        } else {
			window.scrollTo(0,0)
            console.log('Provide a #section to scroll a section into view on page load')
        }
    },
        delay)
}