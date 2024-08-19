import { LocationIcon, PhoneIcon, MailIcon, FacebookIcon } from '~/components/Icons';
type contact = {
    content: string;
    icon: any;
};

const contactList: contact[] = [
    { content: '15 Đường số 2, Cư xá Lữ Gia, Phường 15, Quận 11, TP. HCM ', icon: LocationIcon },
    { content: '02838650921', icon: PhoneIcon },
    { content: 'vanphong@damsenpark.vn', icon: MailIcon },
    { content: 'Phuthotourist', icon: FacebookIcon },
];

export default contactList;
