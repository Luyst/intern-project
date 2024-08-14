import { location, phone, mail, facebook } from '~/components/Icons';
type contact = {
    content: string;
    icon: any;
};

const contactList: contact[] = [
    { content: '15 Đường số 2, Cư xá Lữ Gia, Phường 15, Quận 11, TP. HCM ', icon: location },
    { content: '02838650921', icon: phone },
    { content: 'vanphong@damsenpark.vn', icon: mail },
    { content: 'Phuthotourist', icon: facebook },
];

export default contactList;
