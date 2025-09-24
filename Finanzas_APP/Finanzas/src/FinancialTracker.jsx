// Componente principal de la app de finanzas
// Ruta: src/FinancialTracker.jsx
// Usa solo componentes y estilos locales, e íconos SVG de FontAwesome locales

import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import CardTitle from "./components/CardTitle";
import CardContent from "./components/CardContent";
import CardDescription from "./components/CardDescription";
import Input from "./components/Input";
import Label from "./components/Label";
import Textarea from "./components/Textarea";
import Select from "./components/Select";
import "./App.css";

import CalendarIcon from "./assets/icons/calendar.svg";
import CreditCardIcon from "./assets/icons/credit-card.svg";
import DollarSignIcon from "./assets/icons/dollar-sign.svg";
import TrendingUpIcon from "./assets/icons/trending-up.svg";
import TrendingDownIcon from "./assets/icons/trending-down.svg";
import PlusIcon from "./assets/icons/plus.svg";
import EditIcon from "./assets/icons/edit.svg";
import TrashIcon from "./assets/icons/trash.svg";

// FinancialTracker principal
export default function FinancialTracker() {
  // Estados principales
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    date: new Date().toISOString().split('T')[0],
    amount: 0,
    description: '',
    type: 'income'
  });
  const [editingTransactionId, setEditingTransactionId] = useState(null);

  const [creditCards, setCreditCards] = useState([]);
  const [newCard, setNewCard] = useState({
    name: '',
    dueDate: 15,
    closureDate: 5,
    balance: 0
  });
  const [editingCardId, setEditingCardId] = useState(null);

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [netBalance, setNetBalance] = useState(0);

  // Datos de ejemplo al iniciar
  useEffect(() => {
    const sampleTransactions = [
      { id: '1', date: '2023-05-15', amount: 250000, description: 'Salario', type: 'income' },
      { id: '2', date: '2023-05-16', amount: 4599, description: 'Comestibles', type: 'expense' },
      { id: '3', date: '2023-05-18', amount: 120000, description: 'Trabajo freelance', type: 'income' },
      { id: '4', date: '2023-05-20', amount: 8950, description: 'Cena fuera', type: 'expense' },
    ];
    const sampleCards = [
      { id: '1', name: 'Visa Clásica', dueDate: 15, closureDate: 5, balance: 125075 },
      { id: '2', name: 'Mastercard Oro', dueDate: 25, closureDate: 15, balance: 320000 },
    ];
    setTransactions(sampleTransactions);
    setCreditCards(sampleCards);
  }, []);

  // Calcular totales
  useEffect(() => {
    const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    setTotalIncome(income);
    setTotalExpenses(expenses);
    setNetBalance(income - expenses);
  }, [transactions]);

  // Handlers transacciones
  const handleTransactionSubmit = (e) => {
    e.preventDefault();
    if (editingTransactionId) {
      setTransactions(transactions.map(t =>
        t.id === editingTransactionId ? { ...newTransaction, id: editingTransactionId } : t
      ));
      setEditingTransactionId(null);
    } else {
      const transaction = { ...newTransaction, id: Date.now().toString() };
      setTransactions([...transactions, transaction]);
    }
    setNewTransaction({ date: new Date().toISOString().split('T')[0], amount: 0, description: '', type: 'income' });
  };
  const handleEditTransaction = (transaction) => {
    setNewTransaction({
      date: transaction.date,
      amount: transaction.amount,
      description: transaction.description,
      type: transaction.type
    });
    setEditingTransactionId(transaction.id);
  };
  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  // Handlers tarjetas
  const handleCardSubmit = (e) => {
    e.preventDefault();
    if (editingCardId) {
      setCreditCards(creditCards.map(c =>
        c.id === editingCardId ? { ...newCard, id: editingCardId } : c
      ));
      setEditingCardId(null);
    } else {
      const card = { ...newCard, id: Date.now().toString() };
      setCreditCards([...creditCards, card]);
    }
    setNewCard({ name: '', dueDate: 15, closureDate: 5, balance: 0 });
  };
  const handleEditCard = (card) => {
    setNewCard({
      name: card.name,
      dueDate: card.dueDate,
      closureDate: card.closureDate,
      balance: card.balance
    });
    setEditingCardId(card.id);
  };
  const handleDeleteCard = (id) => {
    setCreditCards(creditCards.filter(c => c.id !== id));
  };

  // Formato moneda
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Tarjetas próximas
  const getUpcomingCards = () => {
    const today = new Date().getDate();
    return creditCards.filter(card =>
      card.dueDate >= today || card.closureDate >= today
    ).sort((a, b) => a.dueDate - b.dueDate);
  };

  // Render principal
  return (
    <div className="app-finanzas">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1>Control Financiero</h1>
          <p>Registra tus ingresos, gastos y tarjetas de crédito</p>
        </header>

        {/* Dashboard Summary */}
        <div className="dashboard-summary">
          <Card className="summary-card border-green">
            <CardHeader>
              <CardTitle><img src={TrendingUpIcon} alt="Ingresos" className="icon" /> Ingresos Totales</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="summary-amount green">{formatCurrency(totalIncome)}</span>
            </CardContent>
          </Card>
          <Card className="summary-card border-red">
            <CardHeader>
              <CardTitle><img src={TrendingDownIcon} alt="Gastos" className="icon" /> Gastos Totales</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="summary-amount red">{formatCurrency(totalExpenses)}</span>
            </CardContent>
          </Card>
          <Card className={`summary-card ${netBalance >= 0 ? 'border-blue' : 'border-orange'}`}> 
            <CardHeader>
              <CardTitle><img src={DollarSignIcon} alt="Balance" className="icon" /> Balance Neto</CardTitle>
            </CardHeader>
            <CardContent>
              <span className={`summary-amount ${netBalance >= 0 ? 'blue' : 'orange'}`}>{formatCurrency(netBalance)}</span>
            </CardContent>
          </Card>
        </div>

        <div className="main-grid">
          {/* Columna izquierda: Formularios */}
          <div className="main-col">
            {/* Formulario de movimientos */}
            <Card>
              <CardHeader>
                <CardTitle><img src={PlusIcon} alt="Agregar" className="icon" /> {editingTransactionId ? 'Editar Transacción' : 'Agregar Transacción'}</CardTitle>
                <CardDescription>Registra tus ingresos o gastos</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTransactionSubmit} className="form">
                  <div className="form-row">
                    <div className="form-group">
                      <Label htmlFor="date">Fecha</Label>
                      <div className="input-icon">
                        <img src={CalendarIcon} alt="Fecha" className="icon" />
                        <Input id="date" type="date" value={newTransaction.date} onChange={e => setNewTransaction({ ...newTransaction, date: e.target.value })} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <Label htmlFor="amount">Monto (ARS)</Label>
                      <Input id="amount" type="number" step="0.01" min="0" value={newTransaction.amount || ''} onChange={e => setNewTransaction({ ...newTransaction, amount: parseFloat(e.target.value) || 0 })} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea id="description" value={newTransaction.description} onChange={e => setNewTransaction({ ...newTransaction, description: e.target.value })} placeholder="Salario, comestibles, alquiler, etc." required />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="type">Tipo</Label>
                    <Select id="type" value={newTransaction.type} onChange={e => setNewTransaction({ ...newTransaction, type: e.target.value })} required>
                      <option value="income">Ingreso</option>
                      <option value="expense">Gasto</option>
                    </Select>
                  </div>
                  <Button type="submit" className="btn-primary" style={{ width: '100%' }}>{editingTransactionId ? 'Actualizar Transacción' : 'Agregar Transacción'}</Button>
                  {editingTransactionId && (
                    <Button type="button" className="btn-outline" style={{ width: '100%' }} onClick={() => {
                      setEditingTransactionId(null);
                      setNewTransaction({ date: new Date().toISOString().split('T')[0], amount: 0, description: '', type: 'income' });
                    }}>Cancelar Edición</Button>
                  )}
                </form>
              </CardContent>
            </Card>
            {/* Formulario de tarjetas */}
            <Card>
              <CardHeader>
                <CardTitle><img src={CreditCardIcon} alt="Tarjeta" className="icon" /> {editingCardId ? 'Editar Tarjeta' : 'Agregar Tarjeta'}</CardTitle>
                <CardDescription>Gestiona tus tarjetas de crédito</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCardSubmit} className="form">
                  <div className="form-group">
                    <Label htmlFor="cardName">Nombre de la Tarjeta</Label>
                    <Input id="cardName" value={newCard.name} onChange={e => setNewCard({ ...newCard, name: e.target.value })} placeholder="Visa Clásica, Mastercard Oro, etc." required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <Label htmlFor="dueDate">Vencimiento (día)</Label>
                      <Input id="dueDate" type="number" min="1" max="31" value={newCard.dueDate} onChange={e => setNewCard({ ...newCard, dueDate: parseInt(e.target.value) || 1 })} required />
                    </div>
                    <div className="form-group">
                      <Label htmlFor="closureDate">Cierre (día)</Label>
                      <Input id="closureDate" type="number" min="1" max="31" value={newCard.closureDate} onChange={e => setNewCard({ ...newCard, closureDate: parseInt(e.target.value) || 1 })} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <Label htmlFor="balance">Saldo Actual</Label>
                    <Input id="balance" type="number" step="0.01" min="0" value={newCard.balance || ''} onChange={e => setNewCard({ ...newCard, balance: parseFloat(e.target.value) || 0 })} required />
                  </div>
                  <Button type="submit" className="btn-primary" style={{ width: '100%' }}>{editingCardId ? 'Actualizar Tarjeta' : 'Agregar Tarjeta'}</Button>
                  {editingCardId && (
                    <Button type="button" className="btn-outline" style={{ width: '100%' }} onClick={() => {
                      setEditingCardId(null);
                      setNewCard({ name: '', dueDate: 15, closureDate: 5, balance: 0 });
                    }}>Cancelar Edición</Button>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
          {/* Columna derecha: Listas */}
          <div className="main-col">
            {/* Lista de tarjetas próximas */}
            <Card>
              <CardHeader>
                <CardTitle><img src={CreditCardIcon} alt="Tarjeta" className="icon" /> Próximas Tarjetas</CardTitle>
                <CardDescription>Fechas importantes de tus tarjetas de crédito</CardDescription>
              </CardHeader>
              <CardContent>
                {getUpcomingCards().length > 0 ? (
                  getUpcomingCards().map(card => (
                    <div key={card.id} className="list-card">
                      <div>
                        <strong>{card.name}</strong>
                        <div className="list-card-desc">Vence: {card.dueDate} | Cierra: {card.closureDate}</div>
                      </div>
                      <div className="list-card-actions">
                        <span className="list-card-balance">{formatCurrency(card.balance)}</span>
                        <Button className="btn-icon" onClick={() => handleEditCard(card)}><img src={EditIcon} alt="Editar" className="icon-sm" /></Button>
                        <Button className="btn-icon" onClick={() => handleDeleteCard(card.id)}><img src={TrashIcon} alt="Eliminar" className="icon-sm" /></Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="list-empty">No hay tarjetas próximas</div>
                )}
              </CardContent>
            </Card>
            {/* Lista de transacciones recientes */}
            <Card>
              <CardHeader>
                <CardTitle>Transacciones Recientes</CardTitle>
                <CardDescription>Tus últimos ingresos y gastos</CardDescription>
              </CardHeader>
              <CardContent>
                {transactions.length > 0 ? (
                  [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5).map(transaction => (
                    <div key={transaction.id} className={`list-card ${transaction.type === 'income' ? 'list-income' : 'list-expense'}`}>
                      <div>
                        <strong>{transaction.description}</strong>
                        <div className="list-card-desc">{new Date(transaction.date).toLocaleDateString('es-AR')}</div>
                      </div>
                      <div className="list-card-actions">
                        <span className={`list-card-balance ${transaction.type === 'income' ? 'green' : 'red'}`}>{transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}</span>
                        <Button className="btn-icon" onClick={() => handleEditTransaction(transaction)}><img src={EditIcon} alt="Editar" className="icon-sm" /></Button>
                        <Button className="btn-icon" onClick={() => handleDeleteTransaction(transaction.id)}><img src={TrashIcon} alt="Eliminar" className="icon-sm" /></Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="list-empty">No hay transacciones aún</div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
