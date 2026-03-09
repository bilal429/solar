import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppFloat() {
    return (
        <a href="https://wa.me/923001234567" target="_blank" rel="noopener" className="wa-float" title="Chat with us on WhatsApp">
            <WhatsAppIcon width={28} height={28} />
            <span className="wa-float-label">Chat with us</span>
        </a>
    )
}
