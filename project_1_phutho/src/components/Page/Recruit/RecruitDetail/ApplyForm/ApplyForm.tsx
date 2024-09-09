import React, { useState } from 'react';
import Button from '~/components/Button';
import InputField from '~/components/InputField';

const ApplyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        birthdate: '',
        placeOfBirth: '',
        address: '',
        phone: '',
        email: '',
        facebook: '',
        education: '',
        travelWillingness: '',
        cv: '',

        overtimeWillingness: '',
        previousWork: '',

        experience: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="sm:pe-40">
            <form className=" " onSubmit={(e) => console.log(e.currentTarget)}>
                {/* Name Input */}
                <div className=" sm:grid grid-cols-2 gap-x-20">
                    <InputField
                        label="Họ tên"
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder="Nguyễn Văn A"
                        onChange={handleChange}
                    />

                    {/* Gender Radio */}
                    <InputField
                        label="Giới tính"
                        type="radio"
                        name="gender"
                        value={formData.gender}
                        options={[
                            { label: 'Nam', value: 'Nam' },
                            { label: 'Nữ', value: 'Nữ' },
                        ]}
                        onChange={handleChange}
                    />

                    {/* Birthdate Input */}
                    <InputField
                        label="Năm sinh"
                        type="date"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                    />

                    {/* Place of Birth Input */}
                    <InputField
                        label="Nơi sinh"
                        type="text"
                        name="placeOfBirth"
                        value={formData.placeOfBirth}
                        placeholder="Phường 6, Quận Tân Bình, TP HCM"
                        onChange={handleChange}
                    />

                    {/* Address Input */}
                    <InputField
                        label="Nơi ở hiện nay"
                        type="text"
                        name="address"
                        value={formData.address}
                        placeholder="123 Âu Cơ, Phường 9, Tân Bình, TP HCM"
                        onChange={handleChange}
                    />

                    {/* Phone Input */}
                    <InputField
                        label="Điện thoại"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        placeholder="+84 0123456789"
                        onChange={handleChange}
                    />

                    {/* Email Input */}
                    <InputField
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Nguyenvana@gmail.com"
                        onChange={handleChange}
                    />

                    {/* Facebook Input */}
                    <InputField
                        label="Facebook cá nhân"
                        type="url"
                        name="facebook"
                        value={formData.facebook}
                        placeholder="facebook.com.vn"
                        onChange={handleChange}
                    />

                    {/* Education Input */}
                    <InputField
                        label="Trình độ"
                        type="select"
                        name="education"
                        value={formData.education}
                        placeholder="Chọn trình độ"
                        options={[
                            { label: 'Đại học', value: 'dai_hoc' },
                            { label: 'Cao đẳng', value: 'cao_dang' },
                            { label: 'Trung học', value: 'trung_hoc' },
                            { label: 'Trung cấp', value: 'trung_cap' },
                            { label: 'Chứng chỉ nghề', value: 'chung_chi_nghe' },
                            { label: 'Thạc sĩ', value: 'thac_si' },
                            { label: 'Tiến sĩ', value: 'tien_si' },
                        ]}
                        onChange={handleChange}
                    />

                    {/* CV File Input */}
                    <InputField label="Đính kèm CV" type="file" name="cv" onChange={handleChange} />

                    {/* Travel Willingness Radio */}
                    <InputField
                        label="Bạn có sẵn sàng đi công tác dài ngày"
                        type="radio"
                        name="travelWillingness"
                        value={formData.travelWillingness}
                        options={[
                            { label: 'Có', value: 'Có' },
                            { label: 'Tùy thời điểm', value: 'Tùy thời điểm' },
                            { label: 'Không', value: 'Không' },
                        ]}
                        onChange={handleChange}
                    />

                    {/* Overtime Willingness Radio */}
                    <InputField
                        label="Bạn có sẵn sàng làm thêm giờ"
                        type="radio"
                        name="overtimeWillingness"
                        value={formData.overtimeWillingness}
                        options={[
                            { label: 'Có', value: 'Có' },
                            { label: 'Tùy thời điểm', value: 'Tùy thời điểm' },
                            { label: 'Không', value: 'Không' },
                        ]}
                        onChange={handleChange}
                    />
                </div>
                {/* previousWork TextArea */}
                <InputField
                    label="Những nơi đã từng làm việc trước đây (ghi rõ vị trí)"
                    type="text"
                    name="previousWork"
                    value={formData.previousWork}
                    placeholder="Những nơi đã từng làm việc trước đây"
                    onChange={handleChange}
                    isTextArea={true}
                />
                {/* Experience TextArea */}
                <InputField
                    label="Kinh nghiệm bản thân"
                    type="text"
                    name="experience"
                    value={formData.experience}
                    placeholder="Kinh nghiệm bản thân"
                    onChange={handleChange}
                    isTextArea={true}
                />

                {/* Submit Button */}
                <div className="mt-4 flex justify-end">
                    <Button text="Gửi ngay" primary size={3} />
                </div>
            </form>
        </div>
    );
};

export default ApplyForm;
