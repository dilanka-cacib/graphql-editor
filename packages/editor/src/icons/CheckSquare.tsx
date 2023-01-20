import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 10L9 12L12.75 7.66667M6.46667 17H13.5333C14.7468 17 15.3535 17 15.817 16.7457C16.2247 16.522 16.5561 16.165 16.7638 15.726C17 15.2269 17 14.5735 17 13.2667V6.73333C17 5.42654 17 4.77315 16.7638 4.27402C16.5561 3.83498 16.2247 3.47802 15.817 3.25432C15.3535 3 14.7468 3 13.5333 3H6.46667C5.25322 3 4.6465 3 4.18302 3.25432C3.77534 3.47802 3.44388 3.83498 3.23615 4.27402C3 4.77315 3 5.42654 3 6.73333V13.2667C3 14.5735 3 15.2269 3.23615 15.726C3.44388 16.165 3.77534 16.522 4.18302 16.7457C4.6465 17 5.25322 17 6.46667 17Z" stroke="#1F8EFE" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>;
export { SvgComponent as CheckSquare };