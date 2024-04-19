import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { BUTTON_TYPE_CLASSES } from '../constants/constants';

export type CategoryItem = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
};

export type ProductCardProps = {
	product: CategoryItem;
};

export type Category = {
	title: string;
	imageUrl?: string;
	items: CategoryItem[];
};

type Directory = {
	title: string;
	imageUrl: string;
};

export type DirectoryProps = {
	categories: Directory[];
};

export type CategoryProps = {
	category: {
		title: string;
		imageUrl: string;
	};
};

export type UserData = {
	createdAt: Date;
	displayName: string;
	email: string;
};

export type CategoryMap = {
	[key: string]: CategoryItem[];
};

export type CartItem = CategoryItem & {
	quantity: number;
};

export type CartItemProps = {
	cartItem: CartItem;
};

export type BackgroundImageProps = {
	imageurl: string;
};

export type ButtonProps = {
	buttonType?: BUTTON_TYPE_CLASSES;
	isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type FormInputProps = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type CategoryRouteParams = {
	category: string;
};
