import { Poppins } from "next/font/google";
import { DM_Sans} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const Dmsans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-DM_Sans",
});
