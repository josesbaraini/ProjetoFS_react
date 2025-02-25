'use client'
import styles from "./page.module.css";
import { useAutenticacao } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { usuarioId, fazerLogout } = useAutenticacao();
  const roteador = useRouter();
  const [excluirMaq, setExcluirMaq] = useState(false);
  const [addMaq, setAddMaq] = useState(false);
  const [excluirUser, setExcluirUser] = useState(false)
  const [tabelaMaq, setTabelaMaq] = useState(false);
  const [tabelaUser, setTabelaUser] = useState(false)
  const [users, setUsers] = useState([{}])

  const getUsers = async () => {


    const resposta = await fetch("https://projetofs-apis.onrender.com/api/adm/userlist")
    let data = await resposta.json();
    console.log(data)
    setUsers(data)
  };
  useEffect(() => {
    console.log(usuarioId)
    if (!usuarioId) {
      roteador.push("/login");
    }
  }, [usuarioId]);
  useEffect(() => {
    getUsers()
  }, [tabelaUser])
  if (!usuarioId) return <p>Redirecionando...</p>;
  return (
    <div className={styles.principal}>
      <div className={styles.painel}>
        <h1 >Listar Máquinas</h1>
        <h1 onClick={() => setTabelaUser(!tabelaUser)}>Listar Usuarios</h1>
        <h1 onClick={() => setAddMaq(!addMaq)}>Adicionar Máquina</h1>
      </div>

      {tabelaUser && <table className={styles.tabela}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Cargo</th>
            <th>Data de Entrada</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody >
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>{user.telefone}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.created_at}</td>
              <td onClick={() => setExcluirUser(!excluirUser)} className={styles.x}>X</td>
            </tr>
          ))}


        </tbody>
      </table>}

      {excluirMaq && <div className={styles.excluirMaq}>
        <p>Tem certeza que deseja excluir a máquina? Digite o ID da máquina para poder excluir.</p>
        <p>Id Da Máquina</p><input></input>
        <div className={styles.botoes}><button>Excluir</button><button>Cancelar</button></div>
        <p>Excluir uma máquina é uma acão permanente.</p>

      </div>}

      {addMaq && <div className={styles.excluirMaq}>
        <p>Nome da Máquina</p><input></input>
        <div className={styles.botoes}><button>Adicionar</button><button>Cancelar</button></div>
        <p>Adicionar uma máquina para todos os usuarios.</p>

        <div><select>
          <option>Deltoides laterais</option>
          <option>Triceptoide Superior</option>
        </select><button>Adicionar Musculo</button></div>
        <h1>Lista de Musculos Utilizados: </h1>
        <p>LicoHipernoitode Superior Direito</p>


      </div>}

      {excluirUser && <div className={styles.excluirMaq}>
        <p>Tem certeza que deseja excluir este usuario? Digite o ID do usuario para poder excluir.</p>
        <p>Id Do Ususario</p><input></input>
        <div className={styles.botoes}><button>Excluir</button><button>Cancelar</button></div>
        <p>Excluir um do banco de dados é uma acão permanente.</p>

      </div>}



    </div>
  );
}