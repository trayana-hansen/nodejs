import db from "../Config/mysql.config.js";

class artistController {
  constructor() {
    console.log("Artist Controller is fired");
  }

  list = (request, response) => {
    // request.query.sortkey;
    let { sortkey, sortdir, limit, attributes } = request.query;
    sortkey = sortkey ? sortkey : "id";
    sortdir = sortdir ? sortdir.toUpperCase() : "ASC";
    limit = limit ? `LIMIT ${parseInt(limit)}` : "";
    attributes = attributes ? attributes : "id, name";

    const sql = `SELECT ${attributes}
					 FROM artist
					 ORDER BY ${sortkey} ${sortdir}
					 ${limit}`;
    db.query(sql, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        response.json(result);
      }
    });
  };

  details = (request, response) => {
    const id = request.params.id || 0;
    const sql = `SELECT id, name
					 FROM artist
					 WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error(err);
      } else {
        response.json(result);
      }
    });
  };
  create = (request, response) => {
    let { name } = request.body;

    const sql = `INSERT INTO artist (name) VALUES (?)`;
    db.query(sql, [name], (err, result) => {
      if (err) {
        console.error(err);
      } else {
        response.json({ new_id: result.insertId });
      }
    });
  };
  update = (request, response) => {
    const { id } = request.body;
    let { name } = request.body;
    const sql = `UPDATE artist SET
			 name = ?
			 WHERE id = ?`;
    db.query(sql, [name, id], (err, result) => {
      if (err) {
        console.error(err);
      } else {
        response.json({ status: "ok", updated_id: id });
      }
    });
  };
  delete = (request, response) => {
    const id = request.params.id || 0;
    const sql = `DELETE FROM artist WHERE id = ?`;
    console.log(sql);
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error(err);
      } else {
        response.sendStatus(200);
      }
    });
  };
}

export { artistController };
