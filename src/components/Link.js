import { A } from "hookrouter";

const Link = ({ children, ...props }) => <A {...props}>{children}</A>;

export default Link;
