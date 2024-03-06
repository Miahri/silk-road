import React, {ChangeEvent, FormEvent, useState} from 'react';
import container from '../../../common/styles/Container.module.css';
import styles from './OrderSection.module.css';
import {TextField} from "@mui/material";

type FormData = {
  phone: string
  email: string
  address: string
  comment: string
}

export const OrderSection = () => {
  const [formData, setFormData] = useState<FormData>({
    phone: '',
    email: '',
    address: '',
    comment: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    setFormData({
      phone: '',
      email: '',
      address: '',
      comment: ''
    });
  };

  return (
    <div className={container.section}>
      <div className={`${container.container} ${styles.container}`}>
        <h2>Оформить заказы</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField type="tel"
                       id="phone"
                       name="phone"
                       value={formData.phone}
                       onChange={handleChange}
                       placeholder={'Номер телефона'}
                       required
                       label="Номер телефона"
                       variant='outlined'
            />

            <TextField type="email"
                       id="email"
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       placeholder={'Email'}
                       required
                       label={'Email'}
                       variant='outlined'
            />

            <TextField type="text"
                       id="address"
                       name="address"
                       value={formData.address}
                       onChange={handleChange}
                       placeholder={'Адрес'}
                       required
                       label={'Адрес'}
                       variant='outlined'
            />
          </div>

          <div>
            <TextField id="comment"
                       type="text"
                       name="comment"
                       value={formData.comment}
                       onChange={handleChange}
                       label={'Комментарий'}
                       variant='outlined'
                       multiline
            />

            <input type="submit" value="Заказать"/>
          </div>
        </form>
      </div>
    </div>
  );
};