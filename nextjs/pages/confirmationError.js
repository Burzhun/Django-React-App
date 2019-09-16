import React from 'react';
import Layout from '../components/Layout'

function ConfirmationErrorPage() {


  return ( 
    <Layout>
        <div class="container container__confirmation_error container_mini">
            <h3> Что-то пошло не так...</h3>
            <p>Транзакция не была завершена.
                <br/> Возможно, вы ошиблись при вводе данных.</p>
            <button class="btn btn__repeat">Попробовать еще раз</button>
        </div>
    </Layout>
  );
}

export default ConfirmationErrorPage;
