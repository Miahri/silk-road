import React, {ChangeEvent, FormEvent, useState} from 'react';
import container from '../../../common/styles/Container.module.css';
import styles from './OrderSection.module.css';

type FormData = {
  phone: string
  email: string
  address: string
  comment: string
}

const OrderSection = () => {
  const [formData, setFormData] = useState<FormData>({
    phone: '',
    email: '',
    address: '',
    comment: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
            <input type="tel"
                   id="phone"
                   name="phone"
                   value={formData.phone}
                   onChange={handleChange}
                   placeholder={'Номер телефона'}
                   required
            />

            <input type="email"
                   id="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   placeholder={'Email'}
                   required
            />

            <input type="text"
                   id="address"
                   name="address"
                   value={formData.address}
                   onChange={handleChange}
                   placeholder={'Адрес'}
                   required
            />
          </div>

          <div>
            <label htmlFor="comment">Комментарий:</label><br />
            <textarea id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}>
            </textarea>

            <input type="submit" value="Заказать" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderSection;