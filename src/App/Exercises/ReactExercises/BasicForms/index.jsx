import { useState } from 'react';

export const Exercise = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    gender: '',
    pet: '',
  });

  const handleChangeValue = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmission}>
      {/* Nazwa użytkownika */}
      <div className="inputField">
        <label htmlFor="name">Username</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChangeValue}
        />
      </div>

      {/* Hasło */}
      <div className="inputField">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChangeValue}
        />
      </div>

      {/* Płeć */}
      <div className="inputSelect">
        <div className="inputField">
          <input
            type="radio"
            id="female"
            name="gender"
            checked={formData.gender === 'female'}
            value={'female'}
            onChange={handleChangeValue}
          />
          <label htmlFor="female">Female</label>
        </div>

        <div className="inputField">
          <input
            type="radio"
            id="male"
            name="gender"
            checked={formData.gender === 'male'}
            value="male"
            onChange={handleChangeValue}
          />
          <label htmlFor="male">Male</label>
        </div>

        <div className="inputField">
          <input
            type="radio"
            id="other"
            name="gender"
            checked={formData.gender === 'other'}
            value="other"
            onChange={handleChangeValue}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>

      <div>
        <label htmlFor="pet">Choose a pet:</label>

        <select
          name="pet"
          id="pet"
          value={formData.pet}
          onChange={handleChangeValue}
        >
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
          <option value="mouse">Mouse</option>
        </select>
      </div>

      <div>
        <input type="submit" name="Send" />
      </div>
    </form>
  );
};

// [...event.target.options].filter(o => o.selected).map(o => o.value)
