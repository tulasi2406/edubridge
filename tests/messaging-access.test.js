const test = require('node:test');
const assert = require('node:assert/strict');
const { canMessage } = require('../lib/access');
const student = { id: 'student-1', role: 'student' };
const mentor = { id: 'mentor-1', role: 'mentor' };
const outsider = { id: 'student-2', role: 'student' };
const users = [student, mentor, outsider];

test('only the accepted student–mentor pair can open private messages', () => {
  const sessions = [{ studentId: student.id, mentorId: mentor.id, status: 'Accepted' }];
  assert.equal(canMessage(student, mentor.id, users, sessions), true);
  assert.equal(canMessage(mentor, student.id, users, sessions), true);
  assert.equal(canMessage(outsider, mentor.id, users, sessions), false);
});

test('pending sessions do not grant messaging access', () => {
  const sessions = [{ studentId: student.id, mentorId: mentor.id, status: 'Pending' }];
  assert.equal(canMessage(student, mentor.id, users, sessions), false);
});

test('users cannot message themselves or inactive accounts', () => {
  const inactive = { id: 'mentor-2', role: 'mentor', active: false };
  assert.equal(canMessage(student, student.id, users, []), false);
  assert.equal(canMessage(student, inactive.id, [...users, inactive], [{ studentId: student.id, mentorId: inactive.id, status: 'Accepted' }]), false);
});
