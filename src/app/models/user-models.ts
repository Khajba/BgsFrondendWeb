import { OrderStatus } from '../enums/order.status.enum';

export interface UserDetails {
    pinCode?: string;
    firstname?: string;
    lastname?: string;
    balance?: number;
    avatarUrl?: string;
}

export interface ChangeUserPassword {
    oldPassword?: string;
    newPassword?: string;
    repeatNewPassword?: string;
}

export interface UserAddress {
    fullName?: string;
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    phoneNumber?: string;

}

export interface UserPaymentDetails {
    cardholderName?: string;
    cardNumber?: string;
    cardNumber1?: string;
    cardNumber2?: string;
    cardNumber3?: string;
    cardNumber4?: string;
    expirationMonth?: string;
    expirationYear?: string;
    cvv2?: string;
}

export interface UserOrderItem {
    orderNumber?: string;
    date?: string;
    totalAmount?: number;
    statusId?: OrderStatus;
    status?: string;
    statusDate?: string;
}

export interface UserAttachment {
    attachmentId?: number;
    attachmentUrl?: string;
}

export interface UserWishlist {
    productId?: number;
    id?: number;
    primaryAttachmentUrl?: string;
    name?: string;
    price?: number;
}

export interface UploadUserAvatarResponseModel {
    avatarUrl?: string;
}