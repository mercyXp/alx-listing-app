export interface CardProps {
  imageUrl: string;
  title: string;
  location: string;
  rating: number;
  price: number;
  tags?: string[];
  features?: string[]; // e.g. ["4 Beds", "2 Baths", "2-4 Guests"]
  discount?: string; // e.g. "60% Off"
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}
