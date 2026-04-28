export default function ThemeSwitcher({ setTheme }) {
  return (
    <div className="themes">
      <button className="t1" onClick={() => setTheme("theme1")} />
      <button className="t2" onClick={() => setTheme("theme2")} />
      <button className="t3" onClick={() => setTheme("theme3")} />
      <button className="t4" onClick={() => setTheme("theme4")} />
      <button className="t5" onClick={() => setTheme("theme5")} />
    </div>
  );
}