import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'teal',
      newColorName: ''
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // custom rule will have name 'isColorNameUnique'
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );

    ValidatorForm.addValidationRule('isColorUnique', (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  handleNameChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div className={classes.container}>
        <ChromePicker
          color={currentColor}
          onChange={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm
          instantValidate={false}
          onSubmit={this.handleSubmit}
          ref='form'
        >
          <TextValidator
            name='newColorName'
            placeholder='Color Name'
            value={newColorName}
            className={classes.colorNameInput}
            variant='filled'
            margin='normal'
            onChange={this.handleNameChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'this field is required',
              'color name must be unique',
              'color already used'
            ]}
          />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            disabled={paletteIsFull}
            className={classes.addColor}
            style={{
              backgroundColor: paletteIsFull ? 'grey' : currentColor
            }}
          >
            {paletteIsFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
