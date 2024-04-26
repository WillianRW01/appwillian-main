export default function Contato() {
  return (
    <div>
      <h1>Contato</h1>
      <p>Entre em contato conosco</p>

      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
