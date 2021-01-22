import axios from 'axios';

class ProductController {
  async update(req, res) {
    const { product_id, ativo } = req.body;

    const chave_aplicacao = 'bac71631-6746-4fec-a391-79426b0568d5';
    const chave_api = 'fdef8cea32652c3484c7';

    const product = await axios.get(`https://api.awsli.com.br/v1/produto/${product_id}/?chave_aplicacao=${chave_aplicacao}&chave_api=${chave_api}`);

    await axios.put(`https://api.awsli.com.br/v1/produto/${product_id}/?chave_aplicacao=${chave_aplicacao}&chave_api=${chave_api}`, {
      ...product.data,
      ativo,
    });

    return res.json({ ok: true });
  }
}

export default new ProductController();
