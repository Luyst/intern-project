import Contact from './Contact';

function ContactContainer() {
    return (
        <div className="contact-container flex flex-col gap-3 justify-between">
            <div className="text-title uppercase text-xl">Liên hệ</div>
            {Contact.map((contact) => (
                <div key={contact.content} className="flex flex-row gap-2  w-72 text-sm justify-start">
                    <div className="flex items-center">
                        <contact.icon />
                    </div>
                    <div>{contact.content}</div>
                </div>
            ))}
        </div>
    );
}

export default ContactContainer;
