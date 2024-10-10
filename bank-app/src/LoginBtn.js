import './LoginBtn.css';

export function LoginBtn() {
  return (
    <div className="LoginBtn">
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export function handleClick() {
  alert('Button clicked');
}