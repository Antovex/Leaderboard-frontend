import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Alert } from '@mui/material';

const CreateUserModal = () => {
  const [name, setName] = useState('');
  const [totalPoints, setTotalPoints] = useState(0);
  const [open, setOpen] = useState(true);
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        navigate('/leaderboard/daily');
      }, countdown * 1000);
    }
  }, [success, countdown, navigate]);

  const handleClose = () => {
    setOpen(false);
    setSuccess(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URI}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      setTotalPoints(data.totalPoints);
      setName('');
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create User</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            margin="dense"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogActions>
        {success && (
          <Alert severity="success" sx={{ mt: 2 }}>
            User created successfully! Total points: {totalPoints}
          </Alert>
        )}
        {success && (
          <Alert severity="info" sx={{ mt: 2 }}>
            Redirecting in {countdown} seconds...
          </Alert>
        )}
      </Dialog>
    </div>
  );
};

export default CreateUserModal;