export async function getDados(req, res) {

    try {

        const lista = await db.query("SELECT *")

        res.send(lista.rows)

    } catch (err) {

        res.status(500).send(err.message)

    }
}