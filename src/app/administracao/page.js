'use client'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.principal}>
      <div className={styles.painel}>
        <h1>Excluir Conta</h1>
        <h1>Adicionar Máquina</h1>
        <h1>Excluir Máquina</h1>
      </div>

      <div className={styles.excluirMaq}>
        <p>Id Da Máquina</p><input></input>
        <div className={styles.botoes}><button>Excluir</button><button>Cancelar</button></div>
        <p>Excluir uma máquina é uma acão permanente.</p>

      </div>

      <div className={styles.excluirMaq}>
        <p>Nome da Máquina</p><input></input>
        <div className={styles.botoes}><button>Adicionar</button><button>Cancelar</button></div>
        <p>Adicionar uma máquina para todos os usuarios.</p>

        <div><select>
          <option>Deltoides laterais</option>
          <option>Triceptoide Superior</option>
        </select><button>Adicionar Musculo</button></div>
        <h1>Lista de Musculos Utilizados: </h1>
        <p>LicoHipernoitode Superior Direito</p>


      </div>

      <div className={styles.excluirMaq}>
        <p>Id Do Ususario</p><input></input>
        <div className={styles.botoes}><button>Excluir</button><button>Cancelar</button></div>
        <p>Excluir um do banco de dados é uma acão permanente.</p>

      </div>
      
  
      
    </div>
  );
}