const Button = ({ color, type, onClick, text, className }) => {
    return (
        <div className={className}>
            {color == "btn" && <button className="btn" type={type} onClick={onClick}>{text}</button>}
            {color == "neutral" && <button className="btn btn-neutral" type={type} onClick={onClick}>{text}</button>}
            {color == "primary" && <button className="btn btn-primary" type={type} onClick={onClick}>{text}</button>}
            {color == "secondary" && <button className="btn btn-secondary" type={type} onClick={onClick}>{text}</button>}
            {color == "accent" && <button className="btn btn-accent" type={type} onClick={onClick}>{text}</button>}
            {color == "ghost" && <button className="btn btn-ghost" type={type} onClick={onClick}>{text}</button>}
            {color == "link" && <button className="btn btn-link" type={type} onClick={onClick}>{text}</button>}
        </div>
    );
}

export default Button;